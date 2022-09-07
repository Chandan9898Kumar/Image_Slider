import React from 'react'
const images = [
    "https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    "https://i.picsum.photos/id/2/200/300.jpg?hmac=HiDjvfge5yCzj935PIMj1qOf4KtvrfqWX3j4z1huDaU",
    "https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc"
];
class MyclassSliderApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }
    HandleRightClick = (e) => {
        const { index } = this.state
        e.preventDefault()
        this.setState({
            index: (index + 1) % images.length
        })
    }

    HandleleftClick = (e) => {
        const { index } = this.state
        e.preventDefault()
        if (index === 0) {
            return
        }
        this.setState({
            index: (index - 1) % images.length
        })
    }
    render() {
        const { index } = this.state
        return (
            <>
                <h2> Class with Image Slider </h2>
                <img
                    src={images[index]}
                    alt="images"
                /><br />
                <button
                    type="button"
                    onClick={this.HandleRightClick}
                >Right click</button><br /><br />
                <button
                    type="submit"
                    onClick={this.HandleleftClick}
                >Left Click</button>
            </>
        )
    }
}

export default MyclassSliderApp;

