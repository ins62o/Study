// 전위 순회(루트 → 왼쪽 → 오른쪽)
function preorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = `${nodes[idx]}`;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

// 중위 순회(왼쪽 → 루트 → 오른쪽)
function inorder(nodes, idx) {
  if (idx < nodes.length) {
    let ret = preorder(nodes, idx * 2 + 1);
    ret += `${nodes[idx]}`;
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }

  return "";
}

// 중위 순회(왼쪽 → 오른쪽 → 루트)
function postorder(nodes, idx) {
  if (idx < nodes.length) {
    ret += preorder(nodes, idx * 2 + 1);
    let ret = preorder(nodes, idx * 2 + 2);
    ret += `${nodes[idx]}`;

    return ret;
  }

  return "";
}

const nodes = [1, 2, 3, 4, 5, 6, 7];
