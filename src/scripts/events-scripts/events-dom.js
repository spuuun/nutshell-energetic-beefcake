// The primary purpose for this page is targeting the conatinaer to render the user input, and converting to HTML Strings
// Author Michael Stiles
import eventsFactory from "./events-factory"

const renderEventsToDom = {
    renderAddEventForm() {
        const eventsContainer = document.querySelector("#eventFormContainer")
        eventsContainer.innerHTML = eventsFactory.newEventFormHtml()
    },
    renderEventsToDom(htmlString) {
        const eventsContainer = document.querySelector("#eventCardsContainer")
        eventsContainer.innerHTML += htmlString
    },
    renderEditForm(eventObj) {
        const editEventCard = document.querySelector(`#eventCard--${eventObj.id}`)
        editEventCard.innerHTML = eventsFactory.editEventHtml(eventObj)
    }
}

export default renderEventsToDom