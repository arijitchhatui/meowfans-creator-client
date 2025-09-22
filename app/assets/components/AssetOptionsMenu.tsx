import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { GET_CREATOR_ASSETS_QUERY, UPDATE_ASSETS_MUTATION } from '@/packages/gql/api/assetsAPI';
import { AssetType } from '@/packages/gql/generated/graphql';
import { useAssetsStore } from '@/zustand/assets.store';
import { useMutation } from '@apollo/client/react';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const AssetOptionsMenu = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [updateAssets] = useMutation(UPDATE_ASSETS_MUTATION, {
    refetchQueries() {
      return [{ query: GET_CREATOR_ASSETS_QUERY, variables: { input: { limit: 30 } } }];
    }
  });
  const {
    canSelect,
    rangeSelection,
    setRangeSelection,
    setDeleteModal,
    selectedAssets: assets,
    setSelectedAssets,
    setCanSelect,
    setUpdated
  } = useAssetsStore();

  const handleUpdateAssets = async (assetType: AssetType) => {
    if (!assets.length) return;
    setLoading(true);
    try {
      await updateAssets({
        variables: {
          input: { assetIds: assets, assetType }
        }
      });
      setUpdated(true);
      toast.success('Updated assets');
    } catch {
      toast.error('Something wrong happened!');
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  const handleRangeSelect = () => {
    setSelectedAssets([]);
    setCanSelect(rangeSelection ? true : false);
    setRangeSelection(!rangeSelection);
  };

  const handleSelect = () => {
    setSelectedAssets([]);
    setCanSelect(!canSelect);
  };

  const handleClose = () => {
    setDeleteModal(false);
    setSelectedAssets([]);
    setCanSelect(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={'icon'}>
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Select</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleSelect}>Select</DropdownMenuItem>
          <DropdownMenuItem onClick={handleRangeSelect}>Range select</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Update</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Type</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem onClick={() => handleUpdateAssets(AssetType.Archive)}>Archive {assets.length || ''}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleUpdateAssets(AssetType.Hidden)}>Hide {assets.length || ''}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleUpdateAssets(AssetType.Private)}>Private {assets.length || ''}</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuLabel>Delete assets</DropdownMenuLabel>
          <DropdownMenuSeparator />
        </DropdownMenuGroup>
        <DropdownMenuItem onClick={() => setDeleteModal(true)}>Delete {assets.length}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
