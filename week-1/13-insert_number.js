// Write a function in C that inserts a number into a sorted singly linked list.

// Prototype: listint_t *insert_node(listint_t **head, int number);
// Return: the address of the new node, or NULL if it failed


class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function insertNode(head, number) {
    const newNode = new ListNode(number);

    if (!head || number < head.value) {
        newNode.next = head;
        return newNode;
    }

    let current = head;
    let prev = null;

    while (current && number > current.value) {
        prev = current;
        current = current.next;
    }

    prev.next = newNode;
    newNode.next = current;

    return head;
}

// Function to print the linked list for testing purposes
function printList(head) {
    while (head) {
        console.log(head.value);
        head = head.next;
    }
}

// Example usage
let head = new ListNode(10);
head = insertNode(head, 20);
head = insertNode(head, 30);
head = insertNode(head, 25);

printList(head);
