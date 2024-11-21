import instance from "./index"

async function getAllPets() {
    const response = await instance.get("/pets")
    console.log(response)
    return response.data
}

async function getPetById(id) {
    const response = await instance.get(`/pets/${id}`)
    console.log(response)
    return response.data
}

async function addPet(data) {
    const response = await instance.post("/pets", data)
    return response.data
}

async function deletePet(id) {
    const response = await instance.delete(`/pets/${id}`)
    console.log(response.data)
    return response.data
}

export {getAllPets, getPetById, addPet, deletePet};
