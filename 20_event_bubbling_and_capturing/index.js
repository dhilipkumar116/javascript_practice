// by default event bubbling happen:
// if we trigger event on child element , that even bubbles out to 
// parent element and triggers event attached to parent elements
document
  .querySelector('#grandparent')
  .addEventListener('click', () => {
    console.log('grand parent clicked');
  }, true);

document
  .querySelector('#parent')
  .addEventListener('click', () => {
    console.log('parent clicked');
  }, true);

document
  .querySelector('#child')
  .addEventListener('click', () => {
    console.log('child clicked');
  }, true);

// event capturing is opposite to event bubbling 
// triggers the events from parent element to child child element
// document
//   .querySelector('#child')
//   .addEventListener('click', () => {
//     console.log('child clicked');
//   }, true);


// to stop propogation
// document
//   .querySelector('#parent')
//   .addEventListener('click', (e) => {
//     console.log('parent clicked');
//     e.stopPropagation()
//   }, false);

