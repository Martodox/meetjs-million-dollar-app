import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-row', 'Integration | Component | table row', {
  integration: true
});

test('it renders', function(assert) {


  this.render(hbs`{{table-row}}`);

  assert.equal(this.$().text().trim(), '');


});
