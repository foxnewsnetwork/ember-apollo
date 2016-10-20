import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';
import Immutable from 'immutable';

moduleForAcceptance('Acceptance | apollo client');

test('Everything works', function(assert) {
  visit('/');

  andThen(() => {
    const container = this.application.__container__;
    const apollo = container.lookup('service:apollo-client');
    assert.ok(Immutable);
    assert.ok(apollo);
    assert.ok(apollo.client)
  });
});
