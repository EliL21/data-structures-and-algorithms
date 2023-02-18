'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('create empty link list', () => {

    const linked = new LinkedList();

    expect(linked.head).toBeNull();
  });
});
it('should insert at begininning', () => {

  const linked = new LinkedList();

  linked.insert('character');

  expect(linked.head.next.value).toEqual('character');
  expect(linked.head.next).toBeNull();

});
