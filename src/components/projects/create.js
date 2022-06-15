import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/form.scss'

export default function CreatePage () {
    var [name, setName] = useState();
    var [investor, setInvestor] = useState();
    var [architect, setArchitect] = useState();
    var [scale, setScale] = useState();
    var [year, setYear] = useState();
    var [task, setTask] = useState();
    var [site, setSite] = useState();
    var [image, setImage] = useState([]);

    // const navigate = useNavigate();

    const OnSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('file', image[0]);
        console.log(formData);
        const data = {
            name: name,
            investor: investor,
            architect: architect,
            scale: scale,
            year: year,
            task: task,
            site: site,
            image: image
        }
        axios.post('http://localhost:5000/project/add', data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <form noValidate onSubmit={OnSubmit}>
                <div className='field'>
                    <label>
                        Project Name
                    </label>
                    <input type="text" name="name" value={name} id="" onChange={e => setName(e.target.value)} />
                </div>

                <div className='field'>
                    <label>
                        Investor
                    </label>
                    <input type="text" name="investor" value={investor} id="" onChange={e => setInvestor(e.target.value)} />
                </div>
                
                <div className='field'>
                    <label>
                        Architecture & Interior Design
                    </label>
                    <input type="text" name="architect" value={architect} id="" onChange={e => setArchitect(e.target.value)} />
                </div>
                
                <div className='field'>
                    <label>
                        Project Type & Scale
                    </label>
                    <textarea name="scale" value={scale} id="" onChange={e => setScale(e.target.value)} />
                </div>
                
                <div className='field'>
                    <label>
                        Implementation Year
                    </label>
                    <input type="number" name="year" value={year} id="" onChange={e => setYear(e.target.value)} min='2010' max='2022' />
                </div>
                
                <div className='field'>
                    <label>
                        Undertaken Tasks
                    </label>
                    <textarea name="tasks" value={task} id="" onChange={e => setTask(e.target.value)} />
                </div>
                
                <div className='field'>
                    <label>
                        Building Site
                    </label>
                    <textarea name="site" value={site} id="" onChange={e => setSite(e.target.value)} />
                </div>

                <div className='field'>
                    <label>
                        Project Image
                    </label>
                    <input type="file" name="image" value={image} id="" onChange={e => setImage(e.target.value)} />
                </div>
                
                <div className='field'>
                    <button>Add Project</button>
                </div>
            </form>
        </div>
    )
}