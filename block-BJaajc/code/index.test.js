import getFullName from 'getFullName';
import isPalindrome from 'isPalindrome';
import getCircumfrence from 'getCircumfrence'; 
import getArea from 'getArea';

test("gets the FullName", () => {
    expect(getFullName()).toEqual("firstName lastName");
});

test("gets the FullName", () => {
    expect(getFullName()).not.toEqual("first lastName");
});


test("checks if it isPalindrome", () => {
    expect(isPalindrome()).toEqual(true);
});
test("checks if it isPalindrome", () => {
    expect(isPalindrome()).not.toEqual(true);
});
test("checks for Circle-circumference", () => {
    expect(getCircumfrence()).toBe ("getCircumfrence");
});
test("checks for Circle-circumference", () => {
    expect(getCircumfrence()).not.toBe ("getCircumfrence");
});
test("checks for Area", () => { 
    expect(getArea()).toEqual("getArea"); 
});
test("checks for Area", () => { 
    expect(getArea()).not.toEqual("getArea"); 
});
