
/**
 * 将链表倒置
 * */

// 生成链表
function Node(data, prev) {
	this.data = data;
	this.next = null;
	if(prev instanceof Node) {
		prev.next = this;
	}
}

let node1 = new Node(1);
let node2 = new Node(2, node1);
let node3 = new Node(3, node2);
let node4 = new Node(4, node3);
let node5 = new Node(5, node4);
let node6 = new Node(6, node5);

// 打印链表
function printNodeList(node) {
	let str = "";
	let nextNode = node.next;
	str += node.data;
	while(nextNode) {
		str += nextNode.data;
		nextNode = nextNode.next;
	}
	console.log(str);
}

printNodeList(node1);

// 非递归实现
function reverseNode(node) {
	let next = null;
	let prev = null;

	while(node !== null) {
		// 改变节点指向
		next = node.next;
		node.next = prev;
		// 开始遍历下一个
		prev = node;
		node = next;
	}
}

// 递归实现
function reverseNode2(node) {
	if(node.next === null) {
		return node;
	}
	reverseNode2(node.next);
	let temp = node.next;
	temp.next = node;
	node.next = null;   // 暂时清除掉现在的节点的next
	return node;
}

reverseNode(node1);
// reverseNode2(node1);
console.log("------")
printNodeList(node6);
