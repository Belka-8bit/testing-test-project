function calcSum() {
  const price = $('[name="variant"] option:checked').data('price').replace(',', '.'),
    amount = $('[name="amount"]').val();

  $('.total_price').text((price * amount).toFixed(2).replace('.', ','));
}

$('[name="variant"]').on('change', calcSum);

$('[data-change]').click(function () {
  const change = +$(this).data('change'),
    $amount = $('[name="amount"]');

  $amount.val(Math.max(1, +$amount.val() + change));
  calcSum();
});
