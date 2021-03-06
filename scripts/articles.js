var Article = function(props) {
  this.title = props.title;
  this.category = props.category;
  this.author = props.author;
  this.authorUrl = props.authorUrl;
  this.body = props.body;
  this.days = Date.parse(props.publishedOn);
};

Article.prototype.daysAgo = function() {
  var oneDay = 1000 * 60 * 60 * 24;

  var currentDay = new Date();
  var publishDay = new Date(this.days);

  var diffDays = Math.abs(currentDay - publishDay);
  return Math.round(diffDays/oneDay);
};

Article.prototype.toHTML = function() {
  var $articleCopy = $('article').first().clone();
  $articleCopy.find('.title').html(this.title);
  $articleCopy.find('#author').html(this.author);
  $articleCopy.find('.authorUrl').attr('href',this.authorUrl);
  $articleCopy.find('#days').html(this.daysAgo());
  $articleCopy.find('.body').html(this.body);
  $articleCopy.appendTo('main');
};
