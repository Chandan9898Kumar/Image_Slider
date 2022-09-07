import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const images = [
    "https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    "https://i.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU",
    "https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc"
];
const ImageSliding = () => {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0)
    const RightHandle = (e) => {
        e.preventDefault()
        setIndex((index + 1) % images.length)
    }

    const leftHandle = (e) => {
        e.preventDefault()
        if (index === 0) {
            return
        }
        setIndex((index - 1) % images.length)
    }
    return (
        <>
            <h2> Images With Functional Component </h2>
            <br /><br />
            <button
                type="submit"
                onClick={() => navigate(-1)}
            >Go Back</button>
            <br /><br />
            <button
                type="submit"
                onClick={() => navigate('/Class')}
            >Go Forward</button>
            <br /><br />

            <img
                src={images[index]}
                alt="Images"
            /><br />
            <button
                type="submit"
                onClick={RightHandle}
            >Right Click</button>
            <br />

            <button
                type="submit"
                onClick={leftHandle}
            >Left Click</button>
            <br />
        </>
    )
}
export default ImageSliding;