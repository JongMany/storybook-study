import IconButton from "./IconButton";

interface INavigationBarProps {
  isDark: boolean;
  isShowBackButton: boolean;
  onBackButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  isShowTitle: boolean;
  title?: string;
  isShowCloseButton: boolean;
  onCloseButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavigationBar({
  isDark,
  isShowBackButton,
  isShowCloseButton,
  onBackButtonClick = () => {},
  onCloseButtonClick = () => {},
  isShowTitle,
  title = "",
}: INavigationBarProps) {
  return (
    <div className="w-full flex justify-between">
      <div className="flex navigation-title-wrapper">
        {/* Prev Button */}
        {isShowBackButton && (
          <IconButton
            alt="prev-icon"
            iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow${
              isDark ? "-white" : ""
            }.svg`}
            onClick={onBackButtonClick}
          />
        )}
        {/* Page Name */}
        {isShowTitle && title.length > 0 && (
          <h1 className={`text-2xl ${isDark ? "text-white" : "text-primary"}`}>
            {title}
          </h1>
        )}
      </div>
      {/* Close Button */}
      {isShowCloseButton && (
        <IconButton
          alt="close-icon"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close${
            isDark ? "-white" : ""
          }.svg`}
          onClick={onCloseButtonClick}
        />
      )}
    </div>
  );
}
