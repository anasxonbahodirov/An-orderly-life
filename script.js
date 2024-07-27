function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="completeTask(this)">Bajarildi</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(button) {
    const listItem = button.parentElement;
    listItem.classList.add('completed');
    setTimeout(() => {
        listItem.remove();
    }, 500);
}

// Enter tugmasini bosish orqali yangi vazifa qo'shish
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
 

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="completeTask(this)">
                <span class="material-icons">done</span>
            </button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        
        // Yangi vazifa qo'shilganda animatsiya
        li.style.opacity = '0';
        li.style.transform = 'translateY(20px)';
        setTimeout(() => {
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';
        }, 10);
    }
}

function completeTask(button) {
    const listItem = button.parentElement;
    listItem.classList.add('completed');
    
    // O'chirish animatsiyasi
    listItem.style.opacity = '0';
    listItem.style.transform = 'translateX(20px)';
    setTimeout(() => {
        listItem.remove();
    }, 300);
}

// Enter tugmasini bosish orqali yangi vazifa qo'shish
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Sahifa yuklanganda input maydoniga fokus qo'yish
window.onload = function() {
    document.getElementById('taskInput').focus();
};