import React from 'react'

export const Sort =  {
  up : {
    icon: 'fa fa-sort-up',
    fn: (column) => {
        return (
            <i className={Sort.up.icon} onClick={() => column.sort()}></i>
        )
        },
  },
    down : {
        icon: 'fa fa-sort-down',
        fn: (column) => {
            return (
                <i className={Sort.down.icon} onClick={() => column.sort()}></i>
            )
            }
        },
     default : {
        icon: 'fa fa-sort',
        fn: (column) => {
            return (
                <i className={Sort.default.icon} onClick={() => column.sort()}></i>
            )
            }
     }   
        
}


