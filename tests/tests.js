(function($) {

	module('jQuery#slugify', {
		setup: function () {

		}
	});

	test('test the DOM function on change', function () {
		expect(1);
		$('#slug-target').slugify('#slug-source');
		$('#slug-source').val('this test hás špeical characters    & ćrāžÿ-śtrįngs     ').trigger('change');
		equal($('#slug-target').val(), 'this-test-has-speical-characters-and-crazy-strings', "Correct slug in target field change event");
	});

	test('test the DOM function on keyup', function () {
		expect(1);
		$('#slug-target').slugify('#slug-source');
		$('#slug-source').val('this test hás špeical characters    & ćrāžÿ-śtrįngs     ').trigger('change');
		equal($('#slug-target').val(), 'this-test-has-speical-characters-and-crazy-strings', "Correct slug in target field with keyup event");
	});

}(jQuery));