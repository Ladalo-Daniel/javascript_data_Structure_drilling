// Write a function in C that checks if a singly linked list is a palindrome.

// Prototype: int is_palindrome(listint_t **head);
// Return: 0 if it is not a palindrome, 1 if it is a palindrome
// An empty list is considered a palindrome


//=====SOLUTION======//



class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function isPalindrome(head) {
    if (!head) {
        return true; // An empty list is considered a palindrome
    }

    // Helper function to reverse a linked list
    function reverseList(node) {
        let prev = null;
        let current = node;

        while (current !== null) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }

    // Find the middle of the list using the two-pointer approach
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the list
    let reversedSecondHalf = reverseList(slow);

    // Compare the reversed second half with the first half
    while (reversedSecondHalf !== null) {
        if (reversedSecondHalf.value !== head.value) {
            return false; // Not a palindrome
        }
        reversedSecondHalf = reversedSecondHalf.next;
        head = head.next;
    }

    return true; // Palindrome
}

// Example usage:
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(3);
const node5 = new ListNode(2);
const node6 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(isPalindrome(node1)); // Output: true
