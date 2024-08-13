//
// const array = [1, 2, 4, 5];
// /* Task 1 */
// console.log(array.length);
// /* Task 2 */
// array.push(6);
// /* Task 3 */
// array.unshift(0);
// /* Task 4 */
// array[3] = 3;
// /* Task 5 */
// array.pop();
// /* Task 6 */
// array.shift();
// /* Task 7 */
// let sum = 0;
// array.forEach(el => sum += el);
// /* Task 8 */
// const arrayReversed = [];
// for (let i = array.length - 1; i >= 0; i--) {
//     arrayReversed.push(array[i]);
// }
// /* Task 9 */
// const arrayEven = array.filter(el => el % 2 === 0);
// console.log(arrayEven)
// /* Task 10 */
// const array2 = [5, 7, 5];
// const combinedArrays = [...array, ...array2];
// /* Task 11 */
// let count = 0;
// for (const item of array) {
//     count++;
// }
// /* Task 12 */
// const repeatCount = array.filter(value => value === 5).length;
// /* Task 13 */
// const minNumber = Math.min(...array);
// /* Task 14 */
// const maxNumber = Math.max(...array);



//  UI VERSION

const array = [1, 2, 4, 5];

const results = [
    { title: 'Display the length of the array.', result: array.length },
    { title: 'Add the element 6 to the end of the array.', result: (function() { array.push(6); return array.slice(); })() },
    { title: 'Add the element 0 to the start of the array.', result: (function() { array.unshift(0); return array.slice(); })() },
    { title: 'Add the element 3 at the 4th position in the array.', result: (function() { array[3] = 3; return array.slice(); })() },
    { title: 'Delete the last element.', result: (function() { array.pop(); return array.slice(); })() },
    { title: 'Delete the first element.', result: (function() { array.shift(); return array.slice(); })() },
    { title: 'Sum the array elements (using loop).', result: (function() { let sum = 0; array.forEach(el => sum += el); return sum; })() },
    { title: 'Reverse the array elements (using loop, don’t use reverse function).', result: (function() { const arrayReversed = []; for (let i = array.length - 1; i >= 0; i--) { arrayReversed.push(array[i]); } return arrayReversed; })() },
    { title: 'Display the even numbers on the screen.', result: (function() { return array.filter(el => el % 2 === 0); })() },
    { title: 'Merge the array with the following array [5,7,5].', result: (function() { const array2 = [5, 7, 5]; return [...array, ...array2]; })() },
    { title: 'Count how many elements in the array (don’t use “length” property).', result: (function() { let count = 0; for (const item of array) { count++; } return count; })() },
    { title: 'Count how many times the number 5 is repeated.', result: (function() { return array.filter(value => value === 5).length; })() },
    { title: 'Find the minimum number in the array.', result: (function() { return Math.min(...array); })() },
    { title: 'Find the maximum number in the array.', result: (function() { return Math.max(...array); })() },
];





document.getElementById('showResults').addEventListener('click', function() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = results.map(({ title, result }) => `
        <div class="task">
            <div class="task-title">${title}</div>
            <div class="task-result">${Array.isArray(result) ? `<span>${JSON.stringify(result, null, 2)}</span>` : result}</div>
        </div>
    `).join('');
});
