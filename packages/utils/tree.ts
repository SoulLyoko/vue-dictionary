import type { Data, TreeNode } from "../types";

interface FlatTreeConfig {
  childrenKey: string;
  depth: number;
  returnDepth: boolean;
  returnChildren: boolean;
}
/**
 * 树扁平化，多级树扁平为一维数组
 * @param {Array} tree 树数组
 * @param {String} config.childrenKey 子数组的key
 * @param {Number} config.depth 起始的深度,0
 * @param {String} config.returnDepth 是否返回深度值_depth,false
 * @param {String} config.returnChildren 是否返回子节点,false
 * @returns {Array} 扁平化后的一维数组
 */
export function flatTree<R extends Data, T extends TreeNode>(tree: T[], inConfig?: Partial<FlatTreeConfig>): R[] {
  const defaultConfig = { childrenKey: "children", depth: 0, returnDepth: false, returnChildren: false };
  const config: FlatTreeConfig = { ...defaultConfig, ...inConfig };
  const { childrenKey, depth, returnDepth, returnChildren } = config;
  return tree
    .map((node: T & { _depth?: number }) => {
      returnDepth && (node._depth = depth);
      if (node[childrenKey]?.length) {
        return [node, flatTree(node[childrenKey], { ...config, depth: depth + 1 })];
      } else {
        return node;
      }
    })
    .flat(Infinity)
    .map(e => {
      !returnChildren && delete (e as T)[childrenKey];
      return e;
    }) as R[];
}

interface FilterTreeConfig {
  childrenKey: string;
  flat: boolean;
}
/**
 * 过滤树节点
 * @param {Array} tree 树数组
 * @param {Function} fn 传入过滤的方法,相当于Array.filter,返回true或false
 * @param {String} config.childrenKey 子数组的key
 * @param {String} config.flat true返回扁平化数组,false返回树结构,默认true
 * @returns {Array} 过滤出的节点
 */
export function filterTree<T extends TreeNode>(
  tree: T[],
  fn: (node: T) => boolean,
  inConfig?: Partial<FilterTreeConfig>
) {
  const defaultConfig = { childrenKey: "children", flat: true };
  const config: FilterTreeConfig = { ...defaultConfig, ...inConfig };
  const { childrenKey, flat } = config;
  const list = [...tree];
  if (flat) {
    const result = [];
    for (const node of list) {
      fn(node) && result.push(node);
      node[childrenKey] && list.push(...node[childrenKey]);
    }
    return result;
  } else {
    return list.filter(node => {
      const hasChildren = node[childrenKey]?.length;
      (node[childrenKey] as T[]) = hasChildren && filterTree(node[childrenKey], fn, config);
      return fn(node) || node[childrenKey]?.length;
    });
  }
}

interface FindTreeConfig {
  childrenKey: string;
  returnChildren: boolean;
}
/**
 * 查找树节点
 * @param {Array} tree 树数组
 * @param {Function} fn 传入查找的方法,相当于Array.find(node=>boolean),需返回true或false
 * @param {String} config.childrenKey 子数组的key
 * @param {String} config.returnChildren 是否返回子节点,false
 * @returns {Object|null} 查找到的节点
 */
export function findTree<T extends TreeNode>(tree: T[], fn: (node: T) => boolean, inConfig?: Partial<FindTreeConfig>) {
  const defaultConfig = { childrenKey: "children", returnChildren: false };
  const config: FindTreeConfig = { ...defaultConfig, ...inConfig };
  const { childrenKey, returnChildren } = config;
  const list = [...tree];
  for (const node of list) {
    if (fn(node)) {
      !returnChildren && delete node[childrenKey];
      return node;
    }
    node[childrenKey] && list.push(...node[childrenKey]);
  }
  return null;
}

interface TreeMapConfig<T> {
  childrenKey: string;
  parent: T | null;
  depth: number;
}
/**
 * 提取tree指定结构
 * @param {Array} tree 树数组
 * @param {Function} fn 传入的方法,相当于Array.map((node, index, parent, depth)=>any),需返回新的结构
 * @param {String} config.childrenKey 子数组的key
 * @param {Number} config.parent 父级节点,null
 * @param {Number} config.depth 起始的深度,0
 * @returns {Array} 新的树结构
 */
export function treeMap<T extends TreeNode, N extends TreeNode>(
  tree: T[],
  fn: (node: T, index: number, parent: T | null, depth: number) => N,
  inConfig?: Partial<TreeMapConfig<T>>
): N[] {
  const defaultConfig = { childrenKey: "children", parent: null, depth: 0 };
  const config: TreeMapConfig<T> = { ...defaultConfig, ...inConfig };
  const { childrenKey, parent, depth } = config;
  const result = tree.map((node, index) => {
    const hasChildren = node[childrenKey]?.length;
    const conversionData = fn(node, index, parent, depth) || node;
    if (hasChildren) {
      return {
        ...conversionData,
        [childrenKey]: treeMap(node[childrenKey], fn, { ...config, parent: node, depth: depth + 1 })
      };
    } else {
      return { ...conversionData };
    }
  });
  return result;
}
