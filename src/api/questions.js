import axios from "axios"

let questionMapping = "https://java-app-qga.herokuapp.com//api/questions"

export const getAllQuestions = async () => {
    const data = await axios.get(`${questionMapping}/getAllQuestions`);
    return data.data;
}

export const submitQuestion = async (question) => {
    const data = await axios.post(`${questionMapping}/addQuestion`, question);
    return data.data;
}

export const deleteQuestion = async(question) => {
    const data = await axios.post(`${questionMapping}/delQuestion`, question);
    return data.data
}

export const genRandomQuestion = async() => {
    const data  = await axios.get(`${questionMapping}/getQuestionByRandom`);
    return data.data;
}

