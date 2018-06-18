'use strict';
var photos = [
  {url: 'photos/1.jpg',
    likes: 15,
    comments: 'Всё отлично!',
    description: 'Тестим новую камеру!'
  },
  {
    url: 'photos/2.jpg',
    likes: 16,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Затусили с друзьями на море!'
  },
  {
    url: 'photos/3.jpg',
    likes: 17,
    comments: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    description: 'Как же круто тут кормят'
  },
  {
    url: 'photos/4.jpg',
    likes: 18,
    comments: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    description: 'Отдыхаем...'
  },
  {
    url: 'photos/5.jpg',
    likes: 19,
    comments: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    description: 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья.'
  },
  {
    url: 'photos/6.jpg',
    likes: 20,
    comments: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    description: 'Вот это тачка!'
  },
  {
    url: 'photos/7.jpg',
    likes: 21,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Затусили с друзьями на море!'
  },
  {
    url: 'photos/8.jpg',
    likes: 22,
    comments: 'Всё отлично!.',
    description: 'Как же круто тут кормят'
  },
  {
    url: 'photos/9.jpg',
    likes: 199,
    comments: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    description: 'Отдыхаем...'
  },
  {
    url: 'photos/10.jpg',
    likes: 180,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Вот это тачка!'
  },
  {
    url: 'photos/11.jpg',
    likes: 46,
    comments: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    description: 'Как же круто тут кормят'
  },
  {
    url: 'photos/12.jpg',
    likes: 67,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......'
  },
  {
    url: 'photos/13.jpg',
    likes: 81,
    comments: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    description: 'Затусили с друзьями на море!'
  },
  {
    url: 'photos/14.jpg',
    likes: 100,
    comments: 'Всё отлично!',
    description: 'Тестим новую камеру!'
  },
  {
    url: 'photos/15.jpg',
    likes: 118,
    comments: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    description: 'Отдыхаем...'
  },
  {
    url: 'photos/16.jpg',
    likes: 111,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Отдыхаем...'
  },
  {
    url: 'photos/17.jpg',
    likes: 119,
    comments: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    description: 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......'
  },
  {
    url: 'photos/18.jpg',
    likes: 199,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Затусили с друзьями на море!'
  },
  {
    url: 'photos/19.jpg',
    likes: 199,
    comments: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    description: 'Вот это тачка!'
  },
  {
    url: 'photos/20.jpg',
    likes: 162,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Как же круто тут кормят'
  },
  {
    url: 'photos/21.jpg',
    likes: 164,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Затусили с друзьями на море!'
  },
  {
    url: 'photos/22.jpg',
    likes: 180,
    comments: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    description: 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......'
  },
  {
    url: 'photos/23.jpg',
    likes: 153,
    comments: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    description: 'Тестим новую камеру!'
  },
  {
    url: 'photos/24.jpg',
    likes: 169,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Затусили с друзьями на море!'
  },
  {
    url: 'photos/25.jpg',
    likes: 170,
    comments: 'В целом всё неплохо. Но не всё.',
    description: 'Затусили с друзьями на море!'
  },
];
var pictureTemplate = document.querySelector('#picture').content.querySelector('a');
var createPictures = function () {
  for (var i = 0; i < photos.length; i++) {
    var pituresElement = pictureTemplate.cloneNode(true);

    pituresElement.querySelector('.picture__img').textContent = photos[i].url;
    pituresElement.querySelector('.picture__stat--likes').textContent = photos[i].likes;
    pituresElement.querySelector('.picture__stat--comments').textContent = photos[i].comments;
    pituresElement.querySelector('.picture__stats').textContent = photos[i].description;
    pictureTemplate.appendChild(pituresElement);
  }
  return pituresElement;
};
var pictureDraw = document.createDocumentFragment();
for (var i = 0; i < photos.length; i++) {
  pictureDraw.appendChild(createPictures(photos[i]));
}
