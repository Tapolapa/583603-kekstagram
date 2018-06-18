'use strict';

var photoPaths = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg',
  'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg',
  'photos/11.jpg', 'photos/12.jpg', 'photos/13.jpg', 'photos/14.jpg', 'photos/15.jpg',
  'photos/16.jpg', 'photos/17.jpg', 'photos/18.jpg', 'photos/19.jpg', 'photos/20.jpg',
  'photos/22.jpg', 'photos/23.jpg', 'photos/24.jpg', 'photos/25.jpg'
];

var photoComments = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья.',
  'Вот это тачка!'
];

var photoDescriptions = ['Тестим новую камеру!', 'Затусили с друзьями на море!', 'Как же круто тут кормят',
  'Вот это тачка!'
];

var photoObjects = [];
var photoQuantity = 25;

var getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomNumbers = function (min, max) {
  return Math.random() * (max - min) + min;
};

for (var i = 0; i < photoQuantity; i++) {
  photoObjects[i] =
    {url: getRandom(photoPaths),
      likes: getRandomNumbers((15, 200)),
      comments: getRandomNumbers(1, 2) + ' ' + getRandom(photoComments),
      description: getRandom(photoDescriptions)
    };
}
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture__link');
var picturesElementList = document.querySelector('.picture__stats');

var createPictures = function () {
  photoObjects.forEach(function (item) {
    var pituresElement = pictureTemplate.cloneNode(true);
    pituresElement.querySelector('.picture__img').src = item.url;
    pituresElement.querySelector('.picture__stat--likes').textContent = item.likes;
    pituresElement.querySelector('.picture__stat--comments').textContent = item.comments;
    picturesElementList.appendChild(pituresElement);
  });
};

pictureTemplate = document.createDocumentFragment();
for (i = 0; i < photoObjects.length; i++) {
  pictureTemplate.appendChild(createPictures(photoObjects[i]));
}
var bigPictureList = document.querySelector('.big-picture');
bigPictureList.classList.remove('hidden');


photoObjects.forEach(function (item) {
  var element = bigPictureList.cloneNode(true);
  element.querySelector('.big-picture__img').src = item.url;
  element.querySelector('.likes-count').textContent = item.likes;
  element.querySelector('.comments-count').textContent = item.comments;
  element.querySelector('.social__comments').textContent = item. description;
  bigPictureList.appendChild(element);
});


var socialCount = document.querySelector('.social__comment-count', '.social__loadmore');
socialCount.classList.add('visually-hidden');


