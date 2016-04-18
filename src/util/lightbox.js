define(() => {
  const lightbox = $('#LightBox')
  const modal = $('#LightBox>div.lightbox-modal');
  const inner = $('#LightBox>div.inner');
  modal.click(e => lightbox.css({display: 'none'}));

  return {
    show: () => lightbox.css({display: 'block'}),
    html: (html) => inner.html(html)
  };
});
