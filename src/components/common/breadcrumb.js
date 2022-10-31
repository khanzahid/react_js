import React from 'react';

export default function Breadcrumb(props){
    return(
        <div class="pagetitle-wrap"><div class="container" ><h1>{props.pageTitle}</h1><div class="breadcrub-content">
                <ul><li><a href="/">Home</a></li><li>
                    <a href="#">{props.pageTitle}</a>
                </li></ul>
            </div></div>
        </div>
            
    )
}