//https://leetcode.com/problems/add-two-numbers/description/
//节点
function ListNode(val){
    this.val = val;
    this.next = null;
}
//生成链表
function createList(nums){
    let l = new ListNode();
    if(nums.length == 0){
        return;
    }else if(nums.length == 1){
        l.val = nums[0];
        return l;
    }
    let len = nums.length;
    while(len > 1){
        l.val = nums[0];
        l.next = createList(nums.slice(1));
        len --;
    }
    return l;
}
//两链表相加
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);
    if(!l1 || !l2){
        //判断传入的链表是否有为空的
        //将不为空的链表作为返回值
        result = l1 || l2;
        return result;
    }else if(!l1.next && !l2.next){
        //判断传入的任一链表是否含有下一节点
        //否，则传回相加后节点
        let sum = parseInt(l1.val) + parseInt(l2.val);
        //两节点相加是否大于10
        //是，将倍数存于下一节点中
        //否，直接返回新节点
        if(sum >= 10){
            result.val = sum % 10;
            result.next = new ListNode(parseInt(sum / 10));
        }else{
            result.val = sum;
            result.next = null;
        }
        return result;
    }
    //任一链表的下一节点不为空
    //递归调用
    if(l1.next || l2.next){
        let sum = parseInt(l1.val) + parseInt(l2.val);
        let l = addTwoNumbers(l1.next, l2.next);
        result.val = sum % 10;
        //这里还需要判断当前节点值相加是否大于10
        //是，继续递归直到得出最终链表
        //否，则直接返回
        if(sum / 10 > 0){
            result.next = addTwoNumbers(new ListNode(parseInt(sum / 10)), l)
        }else{
            result.next = l;
        }
    }
    return result;
};

var l1 = createList([7, 7, 7]);
var l2 = createList([7]);
var l = addTwoNumbers(l1, l2);