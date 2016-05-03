$('.item').each(function() {
  $(this).css('left', ($(this).attr('cx') || 0) + 'px');
  $(this).css('top', ($(this).attr('cy') || 0) + 'px');
});
