const fileFormat  = (url)=>{
    const extension = url.split(".").pop()

    if(extension === "mp4" || extension === "webm" || extension === "ogg" || extension === "3gp" ){
        return "video"
    }

    if(extension === "mp3" || extension === "wav" ){
        return "audio"
    }

    if(extension === "jpg" || extension === "jpeg" || extension === "png" || extension === "gif" ){
        return "image"
    }

    return "file"
}


const transFormImage = (url="", width="200")=>{
    return url
}

export {fileFormat, transFormImage}