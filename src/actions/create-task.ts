import Task from "@/modules/database/models/task";

interface CreateTaskProps {
  id: number;
  password: string;
  logo: string;
  title: string;
  description: string;
  link: string;
  amount: number;
  partner: boolean;
  subscribe: string | undefined;
}

const password = "123451";
export default async function createTask(
  props: CreateTaskProps
): Promise<boolean> {
  const { id, amount, description, link, logo, partner, title, subscribe } =
    props;
  if (props.password !== password) return false;
  const newTask = new Task({
    id,
    logo,
    title,
    description,
    type: "subscribe",
    link,
    amount,
    subscribe,
    partner: partner,
  });
  try {
    await newTask.save();
    return !!newTask;
  } catch (error) {
    return false;
  }
}
