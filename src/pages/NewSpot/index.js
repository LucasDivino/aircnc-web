import React, { useState, useMemo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import api from '../../services/api'
import './styles.css'

export default function NewSpot({history}){

    const [company, setCompany] = useState('')
    const [techs, setTechs] = useState('')
    const [thumbnail, setThumbnail] = useState(null)

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    },[thumbnail])

    async function handleFormSubmit(event){
        event.preventDefault()
        const user_id = localStorage.getItem('user')
        const data = new FormData()

        data.append('thumbnail', thumbnail)
        data.append('company', company)
        data.append('techs', techs)

        await api.post('/spots', data, {
            headers: {user_id}
        })

        history.push('/dashboard')
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>

                <label 
                    id='thumbnail'
                    style={{backgroundImage: `url(${preview})`}}
                    className={thumbnail ? 'has-thumbnail' : ''}
                >
                    <input type='file' onChange={event => setThumbnail(event.target.files[0])}/>
                    {thumbnail ? null : <FontAwesomeIcon icon={faCamera} />}
                </label>

                <label htmlFor='company'>EMPRESA *</label>
                <input
                    id='company'
                    placeholder='Sua empresa incrível'
                    value={company}
                    onChange={event => setCompany(event.target.value) }
                >
                </input>

                <label htmlFor='techs'>TECNOLOGIAS * <span> (separadas por virgulas)</span></label>
                <input
                    id='techs'
                    placeholder='Quais tecnologias vocês usam?'
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                >
                </input>
                
                <button className='btn' type='submit'>Cadastrar</button>
            </form>
        </>
    )
}