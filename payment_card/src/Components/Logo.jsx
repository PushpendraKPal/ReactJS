
import{FaApple} from 'react-icons/fa'
import {FaAmazon} from 'react-icons/fa'

export default function Logo({logo}){
    return <h2>{(logo === "ama")?<FaAmazon/>:<FaApple/>}</h2>
}