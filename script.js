document.addEventListener("DOMContentLoaded", () => {
    const monthYearElem = document.getElementById("monthYear");
    const daysElem = document.getElementById("days");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");

    let currentDate = new Date(2024, 0);

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        monthYearElem.textContent = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();

        const daysInMonth = new Date(year, month + 1, 0).getDate();

        daysElem.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            daysElem.innerHTML += '<div></div>';
        }

        for (let day = 1; day <= daysInMonth; day++) {
            daysElem.innerHTML += `<div>${day}</div>`;
        }
    }

    prevMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    nextMonthBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
