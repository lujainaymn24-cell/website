// Dark Mode

let darkModeButton = document.getElementById("darkModeButton");

if (darkModeButton == null) 
{
 darkModeButton = document.getElementById("darkModeBtn");
}
if (darkModeButton != null) 
{
    darkModeButton.onclick = function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) 
        {
         darkModeButton.innerHTML = "الوضع الفاتح";
        }
        else 
        {
          darkModeButton.innerHTML = "الوضع الداكن";
        }
    };
}
// Events Search and Filter

let searchInput = document.getElementById("searchInput");
let categoryFilter = document.getElementById("categoryFilter");
let eventsContainer = document.getElementById("eventsContainer");
let eventCards = [];
if (eventsContainer != null)
{
    eventCards = eventsContainer.querySelectorAll(".event-card");
}
let noEventsMessage = document.getElementById("noEventsMessage");

if (searchInput != null && categoryFilter != null) 
{
    function filterEvents()
    {
        let searchText = searchInput.value.toLowerCase();
        let selectedCategory = categoryFilter.value;
        let visibleEvents = 0;
        for (let i = 0; i < eventCards.length; i++) 
        {
            let eventTitle = eventCards[i].querySelector(".card-title").innerText.toLowerCase();
            let eventDescription = eventCards[i].querySelector(".card-text").innerText.toLowerCase();
            let eventCategory = eventCards[i].getAttribute("data-category");
            let matchesSearch = eventTitle.includes(searchText) ||
                                eventDescription.includes(searchText);

            let matchesCategory = selectedCategory == "all" ||
                                  selectedCategory == eventCategory;

            if (matchesSearch && matchesCategory) 
            {
                eventCards[i].classList.remove("d-none");
                visibleEvents++;
            }
            else 
            {
                eventCards[i].classList.add("d-none");
            }
        }
        if (noEventsMessage != null) 
        {
            if (visibleEvents == 0) 
            {
                noEventsMessage.classList.remove("d-none");
            }
            else 
            {
                noEventsMessage.classList.add("d-none");
            }
        }
    }
    searchInput.oninput = filterEvents;
    categoryFilter.onchange = filterEvents;
}
// Contact Form
let contactForm = document.getElementById("contactForm");
let formMessage = document.getElementById("formMessage");
if (contactForm != null) 
{
    contactForm.onsubmit = function (event) 
    {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();
        if (name == "" || email == "" || subject == "" || message == "") 
        {
            formMessage.innerHTML = "يرجى ملء جميع الحقول.";
            formMessage.className = "mt-3 text-danger";
        }
        else 
        {
            formMessage.innerHTML = "تم التحقق من البيانات بنجاح.";
            formMessage.className = "mt-3 text-success";
            contactForm.reset();
        }
    };
}
// Share Event
let shareEventBtn = document.getElementById("shareEventBtn");

if (shareEventBtn != null) 
{
    shareEventBtn.onclick = function () 
    {
        alert("يمكنك مشاركة رابط الفعالية مع الآخرين.");
    };
}

// Add Event to Calendar
let calendarBtn = document.getElementById("calendarBtn");

if (calendarBtn != null) 
{
    calendarBtn.onclick = function () 
    {
        alert("تم اختيار إضافة الفعالية إلى التقويم.");
    };
}
// 1. Simple database for the events
const eventsData = 
{
    "1": 
    {
        title: "ملتقى الإبداع الجامعي",
        category: "ثقافة",
        description: "لقاء يجمع الطلاب لعرض أفكارهم ومشاريعهم الإبداعية المتميزة.",
        date: "15 نوفمبر 2026",
        time: "10:00 صباحاً",
        location: "المدرج الكبير - مبنى الجامعة"
    }
};
// 2. Get the event ID from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('id');
// 3. If the ID exists, display the event details in the HTML fields
if (eventId && eventsData[eventId])
{
    const currentEvent = eventsData[eventId];
    // Inject data into HTML using element IDs
    document.getElementById("eventDate").innerText = currentEvent.date;
    document.getElementById("eventTime").innerText = currentEvent.time;
    document.getElementById("eventLocation").innerText = currentEvent.location;
}
// Display Event Details

let eventDetails = 
{
    "1": 
    {
        title: "مقدمة في تطوير الويب",
        category: "برمجة",
        description: "فعالية للتعرف على أساسيات تصميم وتطوير صفحات الويب.",
        date: "15/12/2026",
        time: "الساعة السادسة مساءاً ",
        location: "مركز نفاذ المزة ",
        image: "https://placehold.co/800x450/6C4AB6/FFFFFF?text=Programming"
    },

    "2": 
    {
        title: "مهارات العمل الجماعي",
        category: "ورشة عمل",
        description: "ورشة تساعد الطلاب على تطوير مهارات التعاون والتواصل.",
        date: "20/12/2026",
        time: "الساعة الحادية عشر صباحاً ",
        location: "أونلاين عبر صفوف الجامعة ",
        image: "https://placehold.co/800x450/25B8A5/FFFFFF?text=Workshop"
    },

    "3": 
    {
        title: "يوم الثقافة الجامعية",
        category: "ثقافة",
        description: "نشاط ثقافي يتيح للطلاب مشاركة اهتماماتهم ومواهبهم.",
        date: "25/12/2026",
        time: "الثانية ظهراً ",
        location: "هيئة التميز و الإبداع ",
        image: "https://placehold.co/800x450/F4A261/FFFFFF?text=Culture"
    }
};

let urlParameters = new URLSearchParams(window.location.search);
let eventId = urlParameters.get("id");
let selectedEvent = eventDetails[eventId];

if (selectedEvent != null) 
{
    document.getElementById("eventTitle").innerHTML = selectedEvent.title;
    document.getElementById("eventCategory").innerHTML = selectedEvent.category;
    document.getElementById("eventDescription").innerHTML = selectedEvent.description;
    document.getElementById("eventDate").innerHTML = selectedEvent.date;
    document.getElementById("eventTime").innerHTML = selectedEvent.time;
    document.getElementById("eventLocation").innerHTML = selectedEvent.location;
    document.getElementById("eventImage").src = selectedEvent.image;
}
else 
{
    document.getElementById("eventTitle").innerHTML = "الفعالية غير موجودة";
    document.getElementById("eventDescription").innerHTML =
        "يرجى العودة إلى صفحة الفعاليات واختيار فعالية صحيحة.";
}