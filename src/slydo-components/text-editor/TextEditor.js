import React, {useState, useEffect} from "react";
import { useQuill} from "react-quilljs";
import axios from "axios";
import { FormGroup, Label, Col, Row, Button } from "reactstrap";
import { RSelect } from "../../slydo-components/Component";
import { defaultOptions, groupedData, colourData } from "./SelectData";
import makeAnimated from "react-select/animated";
import { useSelector, useDispatch } from "react-redux";
import { createBlogPost, updateBlogPost } from "../../redux/actions/blog";
import { createTermsAndConditions, getTermsAndConditions } from "../../redux/actions/settings";


export const QuillComponent = () => {
  let placeholder = "Hello World!";
  const { quillRef, quill } = useQuill({placeholder});
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const [SelectedOption, setSelectedOption] = useState(null);
  const [author_username, setAuthorUsername] = useState("");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState();

  // const handleSelect = (selectedOption) => {
  //   console.log(setSelectedOption(selectedOption)); 
  // }
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = JSON.stringify(content);
    const getAuthor =  JSON.parse(localStorage.getItem("accessToken")).user.full_name;
    const tagArray = new Array();
    const TagTexts = tags.replace(/ /g, "").split(",");
    TagTexts.forEach(item => {
      tagArray.push(item);
    })
    
    console.log(title, text, tagArray, getAuthor);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("tags", JSON.stringify(tagArray));
    formData.append("author_username", getAuthor);
    dispatch(createBlogPost(formData));
    console.log(formData)
  }

  useEffect( () => {
    if(quill){
      quill.on('text-change', (delta, oldDelta, source) => {
        const texts= quill.getContents();
        console.log(texts)
        setContent(texts);
      })
      
    }
  } , [quill])


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="mb-3">
        <Row className="gy-4">
          <Col sm="12">
            <FormGroup>
              {/* <Label htmlFor="default-0" className="form-label">
                Blog Title
              </Label> */}
              {/* <div className="form-control-wrap">
                <input className="form-control" type="text" id="default-0" placeholder="e.g. Rihanna's Fenty Launches in Africa" />
              </div> */}
              <Row className="gy-4">
                <Col sm={6}>
                  <div className="form-control-wrap">
                    <label className="form-label">Blog Title</label>
                    <input className="form-control" type="text" id="default-0" placeholder="e.g. Rihanna's Fenty Launches in Africa" value={title}  onChange={(e)=>setTitle(e.target.value)}  />
                  </div>
                </Col>
                {/* <Col sm={6}>
                  <div className="form-control-wrap">
                    <label className="form-label">Author Username</label>
                    <input className="form-control" type="text" id="default-0" placeholder="Richard" value={author_username} onChange={(e)=>setAuthorUsername(e.target.value)}  />
                  </div>
                </Col> */}
                <Col sm={6}>
                  <div className="form-group">
                    <label className="form-label">Select Tags</label>
                    {/* <RSelect value={SelectedOption} onChange={handleSelect} options={defaultOptions} isMulti /> */}
                    <input className="form-control" type="text" id="default-0" placeholder="Tech" value={tags} onChange={(e)=>setTags(e.target.value)}  />
                  </div>
                </Col>
              </Row>
              <div className="form-control-wrap">
              {/* <Col sm={6}>
                <div className="form-group">
                  <label className="form-label">Select Animated</label>
                  <RSelect
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultData={[colourData[0], colourData[1]]}
                    isMulti
                    options={colourData}
                  />
                </div>
              </Col> */}
              </div>
            </FormGroup>
          </Col>
        </Row>
      </div>
     {/* quill text box */}
      <div ref={quillRef} />


      {/* <div className="mt-5"> */}
        <Button onClick={handleSubmit} className="mt-3" style={{float: 'right'}} color="primary">Submit</Button>
      {/* </div> */}
      
    </div>
  );
};

export const UpdateQuillComponent = (data) => {
  const tagValue = data.data.tags.map((tag)=> tag).join(",");
  let placeholder = "Hello World!";
  const { quillRef, quill } = useQuill({placeholder});
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const [SelectedOption, setSelectedOption] = useState(null);
  const [author_username, setAuthorUsername] = useState("");
  const [tags, setTags] = useState(tagValue);
  const [title, setTitle] = useState(data.data.title);
  const [content, setContent] = useState();
  const [getBlog, setGetBlog] = useState();
 
  const blogData = data.data;
  console.log(blogData)
  
  const parseBlog = () => {
    setGetBlog(blogData.text)
  }
 

      const refreshPage = () => {
            setTimeout(() => {
            window.location.reload();
            }, 1000);
      }


  const handleSubmit = (e) => {
    e.preventDefault();
    const getAuthor =  JSON.parse(localStorage.getItem("accessToken")).user.full_name;
    const tagArray = new Array();
    const TagTexts = tags.replace(/ /g, "").split(",");
    TagTexts.forEach(item => {
      tagArray.push(item);
    })
    const text = JSON.stringify(content);
    console.log(title, text, tagArray);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author_username", getAuthor);
    formData.append("text", text);
    formData.append("tags", JSON.stringify(tagArray));
    dispatch(updateBlogPost({formData, id:blogData.id}));
    console.log(formData)
    refreshPage();
  }

  const displayContent = () =>  {
    if(getBlog){
        const parseBlogToObject = JSON.parse(blogData.text)
        const setQuill = quill.setContents(parseBlogToObject)
        console.log(setQuill, "setQuill")
        return setQuill;
    }
  }

  // const getQuill = () => {
  //   if(quill){
  //   const text  = quill.getContents()
  //   return text
  //   }
  // }

  useEffect( () => {
   displayContent()
   
    if(quill){
      quill.on('text-change', (delta, oldDelta, source) => {
        const texts= quill.getContents();
        console.log(texts)
        setContent(texts);
      })
    }
    parseBlog()  
  } , [quill])


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="mb-3">
        <Row className="gy-4">
          <Col sm="12">
            <FormGroup>
              {/* <Label htmlFor="default-0" className="form-label">
                Blog Title
              </Label> */}
              {/* <div className="form-control-wrap">
                <input className="form-control" type="text" id="default-0" placeholder="e.g. Rihanna's Fenty Launches in Africa" />
              </div> */}
              <Row className="gy-4">
                <Col sm={6}>
                  <div className="form-control-wrap">
                    <label className="form-label">Blog Title</label>
                    <input className="form-control" type="text" id="default-0" placeholder="e.g. Rihanna's Fenty Launches in Africa" value={title}  onChange={(e)=>setTitle(e.target.value)}  />
                  </div>
                </Col>
                {/* <Col sm={6}>
                  <div className="form-control-wrap">
                    <label className="form-label">Author Username</label>
                    <input className="form-control" type="text" id="default-0" placeholder="Richard" value={author_username} onChange={(e)=>setAuthorUsername(e.target.value)}  />
                  </div>
                </Col> */}
                <Col sm={6}>
                  <div className="form-group">
                    <label className="form-label">Select Tags</label>
                    {/* <RSelect value={SelectedOption} onChange={handleSelect} options={defaultOptions} isMulti /> */}
                    <input className="form-control" type="text" id="default-0" placeholder="Tech" value={tags} onChange={(e)=>setTags(e.target.value)}  />
                  </div>
                </Col>
              </Row>
              <div className="form-control-wrap">
              {/* <Col sm={6}>
                <div className="form-group">
                  <label className="form-label">Select Animated</label>
                  <RSelect
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultData={[colourData[0], colourData[1]]}
                    isMulti
                    options={colourData}
                  />
                </div>
              </Col> */}
              </div>
            </FormGroup>
          </Col>
        </Row>
      </div>
     {/* quill text box */}
      <div ref={quillRef} />


      {/* <div className="mt-5"> */}
        <Button onClick={handleSubmit} className="mt-3" style={{float: 'right'}} color="primary">Submit</Button>
      {/* </div> */}
      
    </div>
  );
};



export const  QuillComponentMinimal = () => {
  const [contentArray, setContent] = useState();
  const dispatch = useDispatch();
  const [getTermContent, setGetTermContent] = useState();
  const {termsAndConditions} = useSelector(state => state.settings);
  const [loading, setLoading] = useState(false);
  
  const parseTerms = () => {
    setGetTermContent(termsAndConditions);
    console.log(getTermContent, "getTermContent")
  }
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
    ],
  };
  const placeholder = "loading...";  
  const { quillRef, quill } = useQuill({ modules, placeholder});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(getTermsAndConditions());
    let content = JSON.stringify(contentArray)
    console.log(content)
    dispatch(createTermsAndConditions({content}));
    
    setTimeout(() => {
      setLoading(false);
    }, 500);

  }

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "indent",
    "size",
    "header",
    "link",
    "image",
    "video",
    "color",
    "background",
    "clean",
  ];

  const displayContent = () =>{
   if(getTermContent){
    const parseTermsToObject = JSON.parse(termsAndConditions)
    const setQuill = quill.setContents(parseTermsToObject)
    return setQuill  
   }
  } 

  useEffect(() => {    
   let displayDelay = setTimeout(() => displayContent(), 2000);
      if(quill){
      quill.on('text-change', (delta, oldDelta, source) => {
        const texts= quill.getContents();
        console.log(texts)
        setContent(texts);
      })
    }
    parseTerms()
    return () => clearTimeout(displayDelay);
  }, [quill])

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div ref={quillRef} >
        {/* {
          getTermContent && getTermContent.ops.map((item, index) => {
            return (
              <div key={index}>
                {item.insert.text}
              </div>
            )
          })
        } */}
      </div>
      <div ref={quillRef} />
        <Button onClick={handleSubmit} className="mt-3" style={{float: 'right'}} color="primary">
          {
            loading ? "Loading..." : "Submit"
          }
        </Button>
      </div>
  );
};
