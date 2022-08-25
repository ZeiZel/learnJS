'use strict';

const box = document.querySelector('.box');

const observe = new MutationObserver(mutationRecorder => {
    console.log(mutationRecorder);
});

observe.observe(box, {
    childList: true, // следим за дочерними узлами
});
