import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Task2(){
  const [inputstring,setString]=useState('')
  function setStringChange(e){
    e.preventDefault();
    setString(e.target.value)
  }
  function stringlength(){
    document.getElementById('stringlength').innerHTML=inputstring.length;
  }
  function stringindexof(){
    const indexof=document.getElementById('index').value
    document.getElementById('stringindexof').innerHTML=inputstring.indexOf(indexof)
  }
  function stringsearchfor(){
    const searchfor=document.getElementById('search').value
    document.getElementById('stringsearchfor').innerHTML=inputstring.search(searchfor)
  }
  function stringtolower(){
    document.getElementById('stringtolower').innerHTML=inputstring.toLowerCase()
  }
    function stringtoupper(){
    document.getElementById('stringtoupper').innerHTML=inputstring.toUpperCase()
  }
  function stringreplace(){
    const newstr=inputstring
    const replace=document.getElementById('replace').value
    const replacement=document.getElementById('replacement').value
    document.getElementById('stringreplace').innerHTML=newstr.replace(replace,replacement)
  }
  function stringsplice(){
    const newstr=inputstring
    const splicefrom=parseInt(document.getElementById('splice').value)
    const spliceupto=parseInt(document.getElementById('spliceupto').value)
    console.log(spliceupto)
    const splicedstr=newstr.slice(splicefrom,spliceupto)
    document.getElementById('stringsplice').innerHTML=splicedstr
  }
  function stringconcat(){
    const str1=document.getElementById('str1').value
    const str2=document.getElementById('str2').value
    document.getElementById('stringconcat').innerHTML=str1.concat(str2)
  }

  function addoperation(){
    const num1=parseInt(document.getElementById('addnum1').value)
    const num2=parseInt(document.getElementById('addnum2').value)
    document.getElementById('add').innerHTML=" "+(num1+num2).toString()+" ";;
  }
    function subtractoperation(){
    const num1=parseInt(document.getElementById('subtractnum1').value)
    const num2=parseInt(document.getElementById('subtractnum2').value)
    document.getElementById('subtract').innerHTML=" "+(num1-num2).toString()+" ";;
  }
    function multiplyoperation(){
    const num1=parseInt(document.getElementById('multiplynum1').value)
    const num2=parseInt(document.getElementById('multiplynum2').value)
    document.getElementById('multiply').innerHTML=" "+(num1*num2).toString()+" ";;
  }
    function divideoperation(){
    const num1=parseInt(document.getElementById('dividenum1').value)
    const num2=parseInt(document.getElementById('dividenum2').value)
    document.getElementById('divide').innerHTML=" "+(num1/num2).toString()+" ";;
  }

  return(
    <div className="container">
      <div className="title">
        <h1>Learnovate Task 2</h1> <h3> Shahpar Yilmaz</h3>
      </div>
      <div className="innercontainer">
        <div className="stringbox">
          <div className="stringtitle">String Methods</div>
          <div className="stringbody">
            <div className="enterstring">
              Enter the string: <input onChange={setStringChange} className="string" type="text" name="string" id="string" value={inputstring} />
            </div>
            <div className="stringlength">
              The length of the string is : <span id="stringlength"></span> <button onClick={()=>{stringlength()}} className="stringlengthbtn">Answer</button> 
            </div>
            <div className="stringindexof">
              The index of <input className="index" type="text" name="index" id="index" /> is : <span id="stringindexof"></span> <button onClick={()=>{stringindexof()}} className="stringindexofbtn">Answer</button> 
            </div>
            <div className="stringsearchfor">
              Search for <input className="search" type="text" name="search" id="search" /> : <span id="stringsearchfor"></span> <button onClick={()=>{stringsearchfor()}} className="stringsearchforbtn">Answer</button> 
            </div>
            <div className="stringtolower">
              Convert to lowercase : <span id="stringtolower"></span> <button onClick={()=>{stringtolower()}} className="stringtolowerbtn">Answer</button> 
            </div>
            <div className="stringtoupper">
              Convert to uppercase : <span id="stringtoupper"></span> <button onClick={()=>{stringtoupper()}} className="stringtoupperbtn">Answer</button> 
            </div>
            <div className="stringreplace">
              Replace <input className="replace" type="text" name="replace" id="replace" /> with <input className="replacement" type="text" name="replacement" id="replacement" /> : <span id="stringreplace"></span> <button onClick={()=>{stringreplace()}} className="stringreplacebtn">Answer</button> 
            </div>
            <div className="stringsplice">
              Splice from <input className="splice" type="text" name="splice" id="splice" /> upto <input className="spliceupto" type="text" name="spliceupto" id="spliceupto" /> characters : <span id="stringsplice"></span> <button onClick={()=>{stringsplice()}} className="stringsplicebtn">Answer</button> 
            </div>
            <div className="stringconcat">
              Concatenate <input className="str1" type="text" name="str1" id="str1" /> with <input className="str2" type="text" name="str2" id="str2" /> characters : <span id="stringconcat"></span> <button onClick={()=>{stringconcat()}} className="stringconcatbtn">Answer</button> 
            </div>
          </div>
        </div>
        {/* arithmetic operations */}
        <div className="arithmeticbox">
          <div className="arithmetictitle">Arithmetic Operations</div>
          <div className="arithmeticbody">
            <div className="add">
              <input type="text" name="addnum1" id="addnum1"/> + <input type="text" name="addnum2" id="addnum2"/> = 
              <span id="add"></span> <button onClick={()=>{addoperation()}} className="addbtn">Answer</button>
            </div>
            <div className="subtract">
              <input type="text" name="subtractnum1" id="subtractnum1"/> - <input type="text" name="subtractnum2" id="subtractnum2"/> = 
              <span id="subtract"></span> <button onClick={()=>{subtractoperation()}} className="subtractbtn">Answer</button>
            </div>
            <div className="multiply">
              <input type="text" name="multiplynum1" id="multiplynum1"/> + <input type="text" name="multiplynum2" id="multiplynum2"/> = 
              <span id="multiply"></span> <button onClick={()=>{multiplyoperation()}} className="multiplybtn">Answer</button>
            </div>
            <div className="divide">
              <input type="text" name="dividenum1" id="dividenum1"/> + <input type="text" name="dividenum2" id="dividenum2"/> = 
              <span id="divide"></span> <button onClick={()=>{divideoperation()}} className="dividebtn">Answer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<Task2 />,document.getElementById('root')
);
