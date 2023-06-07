import { useState } from "react"
import './App.css'


interface MyOb {[key:string]:string | MyOb}

export const Regressive_Nesting =()=>{

    const [U, setU] = useState<MyOb>({});
    const [Field, setField] = useState("");
    const [InnerVal, setInnerVal]=useState("");
    const [I,setI]= useState("");
 
    const HandleField =(e:React.ChangeEvent<HTMLInputElement>)=>
                {setField(e.target.value); }

    const NestNewObj =(OuterObj:MyOb)=>{
        setI(InnerVal);

        if ( Object.keys(U).length===0 )
            {  setU({[Field]:{}})   }

        Object.entries(OuterObj).map(([k,v])=>

            {   if (Object.keys(v).length === 0) {
                Object.assign( OuterObj[k], {[Field]:{}});
            
            } else {
            NestNewObj(v as MyOb);

            }
        // console.log(OuterObj)
            setU({...OuterObj})
       
            })}
   
    const HandleNestNewObj =(OO: MyOb)=>{ NestNewObj(OO); }

    const Iterate =(I:MyOb)=>{
    return(
            Object.entries(I).map(([k,v])=>
            {
                if (typeof v=== 'object')
                {
                return(
                    <span key={k}>
                    <span> {`{`} {k}: </span>
                    <span> {Iterate(v)}</span>
                    {'} '}
                    </span>
                )}
                   
                else{
                    return(
                        <span key={k}>
                        <span> {`{`}{k} : {v} {`}`} </span>
                        </span>
                        )
                }}
            ))}

    const HandleInnerVal =(e:React.ChangeEvent<HTMLInputElement>)=>
    {setInnerVal(e.target.value)}

    return(
            <div className='root'>
             <div className='b_container'>
              <div id='control_container'>
                <pre> U :{JSON.stringify(U)} </pre>
           
                <pre>  Field Name {Field} -  Inner Value {I} </pre>

                <input  id='inp_1'
                        type="text"
                        name='Field'
                        value={Field}
                        onChange={HandleField}
                />
               
                <button id='btnA' onClick={()=> HandleNestNewObj(U)}> </button>
             
                <div className='data_container' style={{fontSize:'28px'}}>
                    {Iterate(U)}
                </div>
              </div>
             </div>
             <div className='b_container'>
              <div id='control_container'>

               <input  id='inp_1'
                        type="text"
                        name='InnerVal'
                        value={InnerVal}
                        onChange={HandleInnerVal}
                />
               
                <button id='btnA' > Set Val </button>
              </div>
             </div>
            </div>
        )
}
