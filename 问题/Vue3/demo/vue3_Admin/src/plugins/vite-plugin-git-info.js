// getGitInfo.js
import { execSync } from "child_process";

const BRANCH_COMMAND = "git rev-parse --abbrev-ref HEAD";// 获取分支名
const LAST_COMMIT_HASH_COMMAND = "git rev-parse HEAD";// 获取最后一次提交的 hash
const LAST_COMMIT_TIME_COMMAND = "git log -1 --pretty=format:%cd";// 获取最后一次提交的时间
const LAST_COMMIT_MSG_COMMAND = "git log -1 --pretty=format:%s"; // 获取最后一次提交的 message
const LAST_COMMIT_USER_COMMAND = "git log -1 --pretty=format:%an"; // 获取最后一次提交的提交者

// //执行git命令
const runGitCommand = async(command) => {
	try {
		const stdout = await execSync(command).toString().trim();
		return stdout;
	} catch (error) {
		console.error(`Failed to run git command: ${error}`);
		return "Failed to run git command";
	}
};

const getGitInfo = async() => {
	try {
		return {
			branch: await runGitCommand(BRANCH_COMMAND),
			lastCommitHash: await runGitCommand(LAST_COMMIT_HASH_COMMAND),
			lastCommitMsg: await runGitCommand(LAST_COMMIT_MSG_COMMAND),
			lastCommitTime: await runGitCommand(LAST_COMMIT_TIME_COMMAND),
			lastCommitUser: await runGitCommand(LAST_COMMIT_USER_COMMAND)
		};
	} catch (error) {
		console.error(`Failed to getGitInfo ${error}`);
	}
};

const plugin = () => {
	return {
		name: "vite-plugin-git-info",
		// 1.transformIndexHtml是vite.config.js配置中plugins的钩子函数
		// 2.该钩子函数用于处理index.html内容
		async transformIndexHtml(html) {
			const { branch, lastCommitHash } = await getGitInfo();

			return [
				{
					attrs: { name: 'git', content: `${branch}:${lastCommitHash}`}, // 添加标签属性
					inject: "head", // 插入的元素
					tag: "meta" // 插入的标签
				}
			];
		}
	};
};

export default plugin;