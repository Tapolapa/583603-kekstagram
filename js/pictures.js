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
var numberComments = 2;

var getRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomNumbers = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var getRandomComments = function () {
  var per = '<li class="social__comment social__comment--text">' + '<img class="social__picture" src="img/avatar-';
  var per1 = '.svg"' + 'alt="Аватар комментатора фотографии" width="35" height="35">' + '<p class="social__text">';
  var per2 = '</p>' + '</li>';
  var res = '';
  for (i = 0; i < numberComments; i++) {
    res = res + per + getRandomNumbers(2, 6) + per1 + getRandom(photoComments) + per2;
  }
  return res;
};

for (var i = 0; i < photoQuantity; i++) {
  photoObjects[i] =
    {url: getRandom(photoPaths),
      likes: getRandomNumbers(5, 200),
      comments: getRandom(photoComments),
      description: getRandom(photoDescriptions)
    };
}
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture__link');

var createPictures = function (item) {
  var pictureElements = pictureTemplate.cloneNode(true);
  pictureElements.querySelector('.picture__img').src = item.url;
  pictureElements.querySelector('.picture__stat--likes').textContent = item.likes;
  pictureElements.querySelector('.picture__stat--comments').textContent = item.comments;
  return pictureElements;
};
var paint = document.createDocumentFragment();
for (i = 0; i < photoObjects.length; i++) {
  paint.appendChild(createPictures(photoObjects[i]));
}
var picturesContainer = document.querySelector('.pictures');
picturesContainer.appendChild(paint);

var bigPictureList = document.querySelector('.big-picture');
bigPictureList.classList.remove('hidden');
bigPictureList.appendChild(paint);

var bigPhotoItem = photoObjects[0];

bigPictureList.querySelector('.big-picture__img').src = bigPhotoItem.url;
bigPictureList.querySelector('.likes-count').textContent = bigPhotoItem.likes;
bigPictureList.querySelector('.comments-count').textContent = bigPhotoItem.comments;
bigPictureList.querySelector('.social__caption').textContent = bigPhotoItem.description;
bigPictureList.querySelector('.social__comments').innerHTML = getRandomComments();

var socialCount = document.querySelector('.social__comment-count');
socialCount.classList.add('visually-hidden');
var socialLoadmore = document.querySelector('.social__loadmore');
socialLoadmore.classList.add('visually-hidden');


