import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";
//1.upload video
export const uploadVideo = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/videos`, reqBody);
}

//2.get all videos

export const getAllVideos = async () => {
    return await commonAPI('GET', `${serverURL}/videos`, "")
}

//3. delete video
export const deleteVideo = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/videos/${id}`, {})

}

//4. addto watch history

export const addToHistory = async (videoDetails) => {
    return await commonAPI('POST', `${serverURL}/history`, videoDetails)
}

//5. get all watch History

export const getAllHistory = async () => {
    return await commonAPI('GET', `${serverURL}/history`, "videoDetails")
}

//6.delete watch history
export const deleteWatchHistory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/history/${id}`, {})
}

//7. add category

export const addCategory = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}/category`, reqBody)
}

//8. get all categories

export const getAllCategory = async () => {
    return await commonAPI('GET', `${serverURL}/category`, '')
}

//9.delete category
export const deleteCategory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}/category/${id}`, {})
}
