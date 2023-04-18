import { useEffect, useRef, useState, MouseEvent } from "react";

import axios from "axios";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReplayIcon from "@mui/icons-material/Replay";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import MoneyIcon from "@mui/icons-material/Money";
import TollIcon from "@mui/icons-material/Toll";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { nanoid } from "nanoid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useHost } from "esdeka/react";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";
import Slider from "@mui/material/Slider";
import { useAtom } from "jotai";
import Button from "@mui/material/Button";
import dynamic from "next/dynamic";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { fontMono } from "@/projects/fail4/lib/theme";
import { useColorScheme } from "@mui/material/styles";
import { getTheme, prettify } from "@/projects/fail4/utils";
import { answersAtom, showCodeAtom } from "@/projects/fail4/store/atoms";
import { base } from "@/projects/fail4/constants";
import { EditTitle } from "@/projects/fail4/components/EditTitle";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/router";
const MonacoEditor = dynamic(import("@monaco-editor/react"), { ssr: false });

function Codesandbox({ title, content }: { title: string; content: string }) {
	return (
		<Button
			variant="outlined"
			startIcon={<CropSquareIcon />}
			sx={{ whiteSpace: "nowrap" }}
			onClick={async () => {
				const { data } = await axios.post<string>("/api/url/codesandbox", {
					content,
					title,
				});
				window.open(data, "_blank");
			}}
		>
			Codesandbox
		</Button>
	);
}

export function InfoMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const router = useRouter();
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				edge="end"
				aria-label="Info"
				id="infoMenu-button"
				aria-controls={open ? "infoMenu-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<InfoIcon />
			</IconButton>
			<Menu
				id="infoMenu-menu"
				MenuListProps={{
					"aria-labelledby": "infoMenu-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						width: "20ch",
					},
				}}
			>
				<MenuItem
					onClick={() => {
						router.push("/legal/data-policy");
						handleClose();
					}}
				>
					Data Policy
				</MenuItem>
				<MenuItem
					onClick={() => {
						router.push("/legal/imprint");
						handleClose();
					}}
				>
					Imprint
				</MenuItem>
			</Menu>
		</div>
	);
}

export default function Home() {
	const ref = useRef<HTMLIFrameElement>(null);
	const [template, setTemplate] = useState(prettify(base.default));
	const [runningId, setRunningId] = useState("1");
	const [activeId, setActiveId] = useState("1");
	const [editingId, setEditingId] = useState<string | null>(null);
	const [answers, setAnswers] = useAtom(answersAtom);
	const [showCode, setShowCode] = useAtom(showCodeAtom);
	const [loading, setLoading] = useState(false);
	const [loadingLive, setLoadingLive] = useState(true);
	const { mode, systemMode } = useColorScheme();

	const { call, subscribe } = useHost(ref, "fail4");

	const connection = useRef(false);
	const [tries, setTries] = useState(1);

	// Send a connection request
	useEffect(() => {
		const current = answers.find(({ id }) => id === runningId);
		if (connection.current || tries <= 0) {
			return () => {
				/* Consistency */
			};
		}

		const timeout = setTimeout(() => {
			if (current) {
				call({ template: current.content });
			}

			setTries(tries - 1);
		}, 1_000);

		return () => {
			clearTimeout(timeout);
		};
	}, [call, tries, answers, runningId]);

	useEffect(() => {
		if (!connection.current && loadingLive) {
			const unsubscribe = subscribe(event => {
				const { action } = event.data;
				switch (action.type) {
					case "answer":
						connection.current = true;
						setLoadingLive(false);

						console.log("connected");
						break;
					default:
						break;
				}
			});
			return () => {
				unsubscribe();
			};
		}
		return () => {
			/* Consistency */
		};
	}, [subscribe, loadingLive]);

	const current = answers.find(({ id }) => id === activeId);

	function reload() {
		connection.current = false;
		if (ref.current) {
			ref.current.src = `/projects/fail4/live?${nanoid()}`;
			setLoadingLive(true);
			setTries(1);
		}
	}

	return (
		<>
			<CssBaseline />
			<Stack
				sx={{
					...fontMono.style,
					position: "absolute",
					inset: 0,
					overflow: "hidden",
					flexDirection: { md: "row" },
					height: "100%",
				}}
			>
				<Stack
					sx={{
						width: { md: "50%" },
						height: { xs: "50%", md: "100%" },
						flex: 1,
						overflow: "hidden",
					}}
				>
					<AppBar position="static" elevation={0} color="default">
						<Toolbar>
							<Link href="/" aria-label="home" style={{ color: "inherit" }}>
								<Box
									component="svg"
									viewBox="0 0 24 24"
									sx={{ fontSize: "2em", height: "1em", width: "1em" }}
								>
									<path
										fill="currentColor"
										d="m8,12c-.55,0-1-.45-1-1,0,0,0,0,0,0h-1v-1h4v1h-1s0,0,0,0c0,.55-.45,1-1,1Zm-4-2v4l.97,1.56-.02-4.03-.96-1.53Zm4,8h4v-1h-4v1Zm4,2v2s3,0,3,0l2.5-4h-4.3l-1.2,2Zm8-12v6l-1.28,2.05-4.33-.04.61-1.01h-3s0-13,0-13c7,0,8,6,8,6Zm-2,3l-2-2-2,2.01,2,1.99,2-2Zm-7,4h-1v1h1v-1Z"
									/>
								</Box>
							</Link>
							<Button
								form="gpt-form"
								type="submit"
								aria-label={loading ? "Loading" : "Run"}
								aria-disabled={loading}
								disabled={loading}
								startIcon={
									loading ? <CircularProgress size={20} /> : <PlayArrowIcon />
								}
								sx={{ ml: 2 }}
							>
								Run
							</Button>

							{current?.id === editingId ? (
								<EditTitle
									value={current.task}
									onSave={value => {
										setEditingId(null);
										setAnswers(previousAnswers =>
											previousAnswers.map(answer_ =>
												current.id === answer_.id
													? {
															...answer_,
															task: value,
													  }
													: answer_
											)
										);
									}}
								/>
							) : (
								<>
									<Typography
										sx={{
											flex: 1,
											pl: 3,
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap",
										}}
									>
										{current?.task}
									</Typography>
									<IconButton
										onClick={() => {
											if (current) {
												setEditingId(current.id);
											}
										}}
									>
										<EditIcon />
									</IconButton>
								</>
							)}

							<IconButton
								color="inherit"
								aria-label={showCode ? "Hide Code" : "Show Code"}
								onClick={() => {
									setShowCode(previousState => !previousState);
								}}
							>
								{showCode ? <CodeOffIcon /> : <CodeIcon />}
							</IconButton>
							<IconButton
								edge="end"
								color="inherit"
								aria-label="Clear Prompt"
								onClick={async () => {
									setActiveId("1");
									setRunningId("1");
									setTemplate(prettify(base.default));
									reload();
								}}
							>
								<ClearIcon />
							</IconButton>
						</Toolbar>
					</AppBar>
					{showCode && (
						<Box
							sx={{ flex: 1 }}
							onKeyDown={event => {
								if (event.key === "s" && event.metaKey) {
									event.preventDefault();
									setAnswers(previousAnswers =>
										previousAnswers.map(previousAnswer => {
											console.log(previousAnswer.id, activeId);
											return previousAnswer.id === activeId
												? { ...previousAnswer, content: template }
												: previousAnswer;
										})
									);
									reload();
								}
							}}
						>
							<MonacoEditor
								theme={getTheme(mode, systemMode)}
								language="javascript"
								value={template}
								options={{
									fontSize: 14,
								}}
								onChange={async value => {
									console.log(value);
									setTemplate(value ?? "");
								}}
							/>
						</Box>
					)}
					<Stack
						sx={{
							flex: 1,
							display: showCode ? "none" : undefined,
							overflow: "hidden",
						}}
					>
						<Box
							component="form"
							id="gpt-form"
							onSubmit={async event => {
								event.preventDefault();
								const formData = new FormData(event.target as HTMLFormElement);
								const formObject = Object.fromEntries(formData);
								try {
									setLoading(true);
									const { data } = await axios.post("/api/generate", formObject);
									const answer = data;
									setAnswers(previousAnswers => [answer, ...previousAnswers]);
									setRunningId(answer.id);
									setActiveId(answer.id);
									setTemplate(prettify(answer.content));
									reload();
								} catch (error) {
									console.error(error);
								} finally {
									setLoading(false);
								}
							}}
						>
							<Paper variant="outlined" sx={{ p: 0 }}>
								<Stack sx={{ p: 2, gap: 2 }}>
									<TextField
										multiline
										fullWidth
										id="prompt"
										name="prompt"
										label="Prompt"
										placeholder="matrix code"
										defaultValue="matrix code"
										maxRows={6}
										InputProps={{
											style: fontMono.style,
										}}
									/>
								</Stack>
							</Paper>
							<Accordion disableGutters square elevation={0}>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls="gtp-options-content"
									id="gtp-options-header"
									sx={{
										bgcolor: "background.paper",
										color: "text.primary",
									}}
								>
									<Typography>Options</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Stack gap={2}>
										<TextField
											multiline
											fullWidth
											id="negativePrompt"
											name="negativePrompt"
											label="Negative Prompt"
											placeholder="images, audio files"
											maxRows={6}
											InputProps={{
												style: fontMono.style,
											}}
										/>
										<FormControl fullWidth variant="outlined" sx={{ mb: 3 }}>
											<InputLabel id="gpt-model-select-label">
												Model
											</InputLabel>
											<Select
												labelId="gpt-model-select-label"
												id="gpt-model-select"
												name="model"
												defaultValue="gpt-3.5-turbo"
												label="Model"
											>
												<MenuItem value="gpt-3.5-turbo">
													GPT 3.5 turbo
												</MenuItem>
												<MenuItem disabled value="gpt-4">
													GPT 4
												</MenuItem>
											</Select>
										</FormControl>
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{ mb: 2 }}
										alignItems="center"
									>
										<AcUnitIcon />
										<Slider
											marks
											id="temperature"
											name="temperature"
											min={0}
											max={0.8}
											defaultValue={0.2}
											step={0.1}
											valueLabelDisplay="auto"
											aria-label="Temperature"
										/>
										<LocalFireDepartmentIcon />
									</Stack>
									<Stack
										spacing={2}
										direction="row"
										sx={{ mb: 2 }}
										alignItems="center"
									>
										<TollIcon />
										<Slider
											marks
											disabled
											id="maxTokens"
											name="maxTokens"
											min={1024}
											max={4096}
											defaultValue={2048}
											step={256}
											valueLabelDisplay="auto"
											aria-label="Max Tokens"
										/>
										<MoneyIcon />
									</Stack>
									<input
										id="template"
										name="template"
										type="hidden"
										value={template}
										onChange={event => {
											setTemplate(event.target.value);
										}}
									/>
								</AccordionDetails>
							</Accordion>
						</Box>

						<List sx={{ flex: 1, overflow: "auto" }}>
							{answers.map((answer, index) => {
								return (
									<ListItem
										key={answer.id}
										secondaryAction={
											<Stack sx={{ flexDirection: "row", gap: 1 }}>
												{answer.id === "1" ? undefined : (
													<IconButton
														edge="end"
														aria-label="Delete"
														onClick={() => {
															setAnswers(previousAnswers =>
																previousAnswers.filter(
																	({ id }) => id !== answer.id
																)
															);
															if (runningId === answer.id) {
																const previous = answers[index + 1];
																if (previous) {
																	setActiveId(previous.id);
																	setRunningId(previous.id);
																	setTemplate(
																		prettify(previous.content)
																	);
																	reload();
																}
															}
														}}
													>
														<DeleteForeverIcon />
													</IconButton>
												)}
											</Stack>
										}
										disablePadding
									>
										<ListItemButton
											dense
											selected={activeId === answer.id}
											disabled={activeId === answer.id}
											role={undefined}
											onClick={() => {
												setActiveId(answer.id);
												setRunningId(answer.id);
												setTemplate(prettify(answer.content));
												reload();
											}}
										>
											<ListItemIcon>
												{runningId === answer.id ? (
													<CheckIcon />
												) : (
													<VisibilityIcon />
												)}
											</ListItemIcon>

											<ListItemText
												primary={answer.task}
												primaryTypographyProps={{
													sx: {
														overflow: "hidden",
														textOverflow: "ellipsis",
														whiteSpace: "nowrap",
														fontSize: 16,
													},
												}}
											/>
										</ListItemButton>
									</ListItem>
								);
							})}
						</List>
					</Stack>
				</Stack>
				<Stack
					sx={{
						flex: 1,
						width: { md: "50%" },
						height: { xs: "50%", md: "auto" },
						position: "relative",
					}}
				>
					<AppBar position="static" elevation={0} color="default">
						<Toolbar>
							<IconButton
								color="inherit"
								aria-label="Reload"
								onClick={() => {
									reload();
								}}
							>
								<ReplayIcon />
							</IconButton>
							{current && (
								<Codesandbox title={current.task} content={current.content} />
							)}
							<Box sx={{ flex: 1 }} />

							<InfoMenu />
						</Toolbar>
					</AppBar>
					{loadingLive && (
						<Box
							sx={{
								position: "absolute",
								zIndex: 100,
								top: "50%",
								left: "50%",
								transform: "translate(-50%,-50%)",
							}}
						>
							<CircularProgress />
						</Box>
					)}
					<Box
						ref={ref}
						component="iframe"
						sx={{
							width: "100%",
							flex: 1,
							m: 0,
							border: 0,
							overflow: "hidden",
							visibility: loadingLive ? "hidden" : undefined,
						}}
						src="/projects/fail4/live"
					/>
				</Stack>
			</Stack>
		</>
	);
}