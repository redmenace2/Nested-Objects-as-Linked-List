export const Progressive_Nesting =()=>{

    type K = { [key:string]:Array<any> | K}

    const [Obj, setObj]=useState<K>({});
    const [KEY, setKEY]=useState("")

    const [UpdatedObj, SetUpdatedObj]=useState({})

    const [DelKey, setDelKey] = useState("")
    
    const [AR, setAR] = useState<Array<string>>([])
    
    const HandleKEY = (e:React.ChangeEvent<HTMLInputElement>)=>{
            setKEY(e.target.value)   }

    const Nest=()=> {  
        
        if (KEY)
        {
        setObj({[KEY]:Obj})     }
        setKEY("")
        }

    const HandleKeySelect= (e:React.ChangeEvent<HTMLInputElement>)=>{
            setDelKey(e.target.value)    }

    const DelObj=(DO:K)=>{
            SetUpdatedObj({})
            setAR([])

        Object.keys(DO).forEach((key)=>
        { 
            const v = DO[key]
            if (typeof v === 'object')
                {   DelObj (v as K) 
                    if (key === DelKey){return;}

                    if (MarkerKey && key === MarkerKey) 
                          { setAR((prev)=>[...prev, InsertKey]) }

                    setAR((prev)=>[...prev, key]);
                }
            });

             setDelKey(""); setInsertKey(""); setMarkerKey("");

                }

    const UpdateObject = (keys: string[], value: any): K => {
      
        if (keys.length === 0) {
          return value;
        }
        const [currentKey, ...remainingKeys] = keys;
        return {
          [currentKey]: UpdateObject(remainingKeys, value),
        };
      };

      useEffect(()=>{
           
         const newObj:K = UpdateObject(AR.reverse(),{})
        setObj(newObj)
        SetUpdatedObj(newObj)
        

      },[AR])

     
const [InsertKey, setInsertKey] = useState("")
      const HandleInsertKey= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInsertKey(e.target.value)    }

const [MarkerKey, setMarkerKey] = useState("")

      const HandleMarkerKey= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setMarkerKey(e.target.value)    }

    return(

             <div className="root" >
                <div className="b_container" style={{alignSelf:"center"}}>
                    <div id='control_container'>

                        <input  id='inp_1' 
                                type="text"
                                name='DelKey'
                                value={KEY}
                                onChange={HandleKEY}
                        />
                        <button id='btnA' onClick={Nest}> Add </button>

                        <span>
                        <input  style={{height:'20px'}}
                                id='inp_1' 
                                type="text"
                                name='key'
                                value={DelKey}
                                onChange={HandleKeySelect}
                        />
                        &nbsp; &nbsp; &nbsp;
                        <button id='btnB' onClick={()=>DelObj(Obj)}> Delete Key </button>
                        </span>
                        
                        <span>

                            Insert: &nbsp; 
                            <input  style={{height:'20px'}}
                                id='inp_1' 
                                type="text"
                                name='key'
                                value={InsertKey}
                                onChange={HandleInsertKey}
                        />
                            &nbsp; 
                            At: &nbsp; 

                            <input  style={{height:'20px'}}
                                id='inp_1' 
                                type="text"
                                name='key'
                                value={MarkerKey}
                                onChange={HandleMarkerKey}
                        />
                                  &nbsp; &nbsp; &nbsp;
                            <button id='btnB' onClick={()=>DelObj(Obj)}> Insert KEY</button>
                        </span>
       
                        </div>

                        <div className="b_container">

                      
                        <div className="data_container" style={{fontSize:"28px"}}>
                            
                                <div> OBJ {JSON.stringify(Obj)}</div>
                                <div>  UpdatedObj {JSON.stringify(UpdatedObj)} </div>
                              
                        </div>
                        </div>
                    </div>
                </div>
            
    )
}
