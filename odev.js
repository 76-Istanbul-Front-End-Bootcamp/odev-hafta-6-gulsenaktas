window.mockApiUrl = "https://5ff1ac53db1158001748b468.mockapi.io/pets/";


window.removePet = async(id) => {
    console.log(id) // remove the pet with given id

    const response = await fetch(`${mockApiUrl}${id}`, {
        method: "DELETE"
        }
    )
    document.querySelector(`#pet${id}`).remove()   
};

window.generateDetailModal = (data) => {
    return `
    <div class="modal fade" id="exampleModal${data.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Description</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        ${data.description}
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
        </div>
    </div>
    </div>
    </div>
    `
}


window.openPetDetail = async (id) => {
    console.log(id); // show details of the pet with given id
    const response = await fetch(`${mockApiUrl}${id}`)
    const data = await response.json()

    const petModalHtml = generateDetailModal(data);
    document.querySelector("body").innerHTML += petModalHtml;

    var myModal = new bootstrap.Modal(document.getElementById(`exampleModal${id}`))
    myModal.show()

};




