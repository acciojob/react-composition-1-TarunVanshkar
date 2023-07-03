import React,{useState} from 'react';

const Tabs = (props) => {
    // console.log(props.data);
    const [content, setContent] = useState("");
    return(
        <>
            <ul>
                {
                    props.data.map((obj) => (
                        <li onClick={() => setContent(obj.content)}>{obj.title}</li>
                    ))
                }
            </ul>
            <p>{content}</p>
        </>
    )
}
export default Tabs;