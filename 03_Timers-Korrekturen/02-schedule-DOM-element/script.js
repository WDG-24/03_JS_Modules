const messageContainer = document.getElementById('message-container');

const addMessage = () => {
  const html = `<div class="px-5 py-3 rounded bg-red-300">
            <span class="text-center">Special Offer: Get 20% off your next purchase!</span>
          </div>`;

  messageContainer.insertAdjacentHTML('beforeend', html);
};

setTimeout(addMessage, 3000);

// const container = document.getElementById('message-container');

// const timeoutId1 = setTimeout(() => {
//   const div = document.createElement('div');
//   div.style.cssText = `border: 4px solid red; padding: 20px; background: hotpink`;
//   div.classList.add('border', 'rounded-xl', 'text-center');
//   div.innerHTML = 'Tante Hansen kommt heute';
//   container.insertAdjacentElement('beforeend', div);
// }, 2000);

// const MsgContainer = document.getElementById('message-container');

// const element = document.createElement('div');
// element.textContent = 'Special Offer: Get 20% off your next purchase!';
// element.classList.add('bg-red-400', 'text-white', 'font-bold', 'px-5', 'py-3', 'rounded', 'text-center');

// setTimeout(() => {
//   MsgContainer.appendChild(element);
// }, 3000);
