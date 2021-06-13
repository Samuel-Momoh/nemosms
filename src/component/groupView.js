import React from 'react';
// import './stylesheet/groupView.css'

var tags = [];
class Grouplist extends React.Component {
    save = () =>{
        const input = document.getElementById('title-input');
        const data = {
            input,
            tags
        }
        console.log(data);
    }
    constructor (props) {
        super(props);
        this.data =["09009099","09090909","09090090","090909090","09090909","9090909","78678678687"]
        tags=this.data
        // console.log(tags)
    }
    render () {
        return (
            <div  className='group-container'> 
                <div className='title' id='title'>
                <label data-name='label'> Import</label>
                <div className='input-group' id="title-input"><input type="text" placeholder="Enter sender numbers...." id="title" /></div>
                </div>

                <div className='recipient' id='recipient'>
                       {tags.map((item, index) => (
                       <div className="tag" key={index}>
                       <span>{item}</span>
                       <i className="material-icons" data-item={item}>x</i>
                       </div>
                    ))}
                <div className='num-group' id="num-group"><input type="text" placeholder="Enter sender numbers...." id="myInput" /></div>
                </div>

                <div className='send-area'>
                  <div className='save-btn'> 
                  <div className='btn-save' onClick={this.save}><label>Save</label> </div>
                  </div>   
                </div>
          </div>
        );
    }
    componentDidMount () {
        const tagContainer = document.getElementById('recipient');
        const input = document.getElementById('myInput');
        const numGroup = document.getElementById('num-group');
        
       
        
      
        input.addEventListener('keyup', function(e){
          // Add Numbers to Array
          const re = /[0-9]/
            if(e.key === " ") {
              if((re.test(input.value) && input.value !=="" && input.value.length > 3)){
                tags.push(input.value);
                addTags();
                input.value = ''
              }
           
            }
  
        })

        function addTags() {
            reset();
            tags.slice().reverse().forEach(function(tag){
                const input = createTag(tag);
                tagContainer.prepend(input)
                // Send to data base here
            })
        }
        
        function reset() {
            document.querySelectorAll('.tag').forEach(function(tag){
                tag.parentElement.removeChild(tag);
            });
        }
        function createTag(label) {
            const div = document.createElement('div');
            div.setAttribute('class', 'tag');
            const span = document.createElement('span');
            span.innerHTML = label;
            const closeBtn = document.createElement('i');
            closeBtn.setAttribute('class','material-icons');
            closeBtn.setAttribute('data-item', label)
            closeBtn.innerHTML = 'x'
        
            div.appendChild(span);
            div.appendChild(closeBtn);
            return div;
        }
  
  
         // Removing Numbers using delete btn
         document.addEventListener('click', function(e){
            if(e.target.tagName === 'I'){
                const value = e.target.getAttribute('data-item');
                const index = tags.indexOf(value);
                tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
                addTags();
            }
       
        })
//   // Remove numbers using Backspace
  input.addEventListener('keydown', (e)=>{
      console.log('key down')
    if((e.keyCode === 8 ) && input.value == '') {
        if(e.target.tagName === 'I'){
            const value = e.target.getAttribute('data-item');
            const index = tags.indexOf(value);
            tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
            addTags();
        }
           
    }
  })

     
      }
}

export default Grouplist;