import { Autocomplete, TextField, Typography } from '@mui/material';
import { countries, getCountryData, getEmojiFlag, TCountryCode } from 'countries-list';
import Flex from './Flex.component';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void;
  value: string;
};

const CountrySelect: React.FC<Props> = ({ onChange, value }) => {
  const countryOptions: { value: string; label: string }[] = Object.entries(countries).map(([key, value]) => ({
    value: key,
    label: value.name
  }));

  return (
    <Autocomplete
      id="country-select"
      fullWidth
      value={{ value: value, label: getCountryData(value as TCountryCode)?.name ?? '' }}
      onChange={(_, value) => onChange(value?.value ?? '')}
      isOptionEqualToValue={(option) => option.value == value}
      options={countryOptions}
      autoHighlight
      getOptionLabel={(option) => `${getEmojiFlag(option.value as TCountryCode)}\t${option.label}`}
      renderOption={(props, option) => {
        return (
          // @ts-expect-error TypeScript is having a meltdown here, but hey - it works! Feel free to fix it or let it live its best life 🎉
          <Flex {...props} gap={2} alignItems={'center'}>
            {getEmojiFlag(option.value as TCountryCode)}
            <Typography>{option.label}</Typography>
          </Flex>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            sx: { padding: '2px 14px!important' }
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
