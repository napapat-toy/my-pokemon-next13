import VersionGroupCard from "../Cards/VersionGroupCard";
import HeaderText from "../HeaderText";

const VersionGroupsDetail = ({ gameVersions }) => {
  return (
    <div>
      <HeaderText title='Version Groups Detail' />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {gameVersions.results?.map((version) => (
          <VersionGroupCard key={version.name} {...version} />
        ))}
      </div>
    </div>
  )
}

export default VersionGroupsDetail