import React from 'react'

const ListEntry = props => {
    const EnEntry = props.entryData.map((entry, key) => {

        let title
        title = entry.fields.title ? entry.fields.title : "No data found for title"
        let imgurl
        imgurl = entry.fields.image ? entry.fields.image[0].url : ""
        let url
        url = entry.fields.url ? entry.fields.url : "/"
        let notes
        notes = entry.fields.notes ? entry.fields.notes : "No data found for notes"
        let emoji
        emoji = entry.fields.emoji ? entry.fields.emoji : "No data found for emoji"
        let id = key;
        
        return ( 
            
            <a className="text-dark w-100" href={url}>
                <p hidden id={id}></p>
                <div className="row border-bottom py-3 project-list">

                    <div className="col-auto px-3"><img className="round-img" src={imgurl} alt={title}></img>

                    </div>
                    <div className="col align-middle">
                        <span className="font-weight-bold">{title} </span>
                        <span className="">
                            | {notes}
                        </span>

                    </div>
                    <p className="float-right pr-3 m-0">
                        {emoji}
                            <svg role="img" width="24" height="24" xmlns="http://www.w3.org/2000/svg">

                                <g>
                                    <title>background</title>
                                    <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
                                </g>
                                <g>
                                    <title>Layer 1</title>
                                    <path fill="#343a40" id="svg_1" d="m8.586,5.586c-0.781001,0.781 -0.781001,2.047 0,2.828l3.584999,3.586l-3.584999,3.586c-0.781001,0.781 -0.781001,2.046999 0,2.827999c0.389999,0.391001 0.901999,0.586 1.414,0.586s1.024,-0.195 1.414,-0.586l6.415001,-6.414l-6.415001,-6.414c-0.78,-0.781 -2.047999,-0.781 -2.827999,0z" />
                                </g>
                            </svg>
                        </p>
                </div>
            </a>
        )
    })
    return <div>{EnEntry}</div>
}

export default ListEntry