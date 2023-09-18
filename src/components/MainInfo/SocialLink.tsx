import FolderIcon from "@mui/icons-material/Folder";

interface SocialProps {
  link: string;
  name: string;
}

const SocialLink = ({ link, name }: SocialProps) => {
  return (
    <li>
      <FolderIcon style={{ color: "#CCCCCC", marginRight: "5px" }} />
      <a href={link}>{name}</a>
    </li>
  );
};

export default SocialLink;
