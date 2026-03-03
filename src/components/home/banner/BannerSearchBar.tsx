import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";


const BannerSearchBar = () => {
  return (
    <div
      className="flex flex-col md:flex-row gap-3 items-center bg-white p-5 rounded-lg shadow-md
                relative md:absolute md:bottom-24 md:left-1/2 md:-translate-x-1/2 z-10"
    >
      {/* search by text */}
      <div className="flex items-center gap-2 w-full md:w-auto">

      <Search/>

        <Input
          className="flex-1 border-b-2 border-gray-300 placeholder:text-muted rounded-none"
          placeholder="Job title or keyword"
        />
      </div>

      {/* filter by dropdown */}
      <div className="flex items-center gap-2 w-full md:w-auto">
       <MapPin />

        <Select>
          <SelectTrigger className="w-full md:w-45">
            <SelectValue placeholder= "Location"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Dhaka">Dhaka</SelectItem>
              <SelectItem value="Sylhet">Sylhet</SelectItem>
              <SelectItem value="Rajshahi">Rajshahi</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full md:w-auto">Search My Job</Button>
    </div>
  );
};

export default BannerSearchBar;
